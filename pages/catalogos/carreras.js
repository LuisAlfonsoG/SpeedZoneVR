import Link from 'next/link';
import styles from './catalogos.module.css';
import { useState } from 'react';
import Layout from '@/components/layout';
import {BsArrowUpRight} from 'react-icons/bs';
import { ImArrowUpRight2 } from 'react-icons/im';
import { createClient } from 'contentful';
import Image from 'next/image';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  })

  let data = await client.getEntries({content_type: "catalogo"})
  return {
    props: {
      games: data
    }
  }
}

export default function Catalogo({games}) {
  console.log(games)
  let img_url = "https:" + games.items[0].fields.media[0].fields.file.url;
  let img_width = games.items[0].fields.media[0].fields.file.details.image.width; 
  let img_height = games.items[0].fields.media[0].fields.file.details.image.height;
  return (
    <Layout>
      <header>
        <HeaderCard />
      </header>
      <main className={styles.main}>
        <Image src={img_url} width={200} height={200}/>
        {JSON.stringify(games)}
      </main>
    </Layout>
  )
}

function HeaderCard(){
  return (
    <>
      <div className={styles.apply_variable}>
        <h1>Carreras</h1>
        <SearchBar find={() => {}}/>
        <Link href={'/realidadVirtual'}><span className={styles.arrow_icon}><ImArrowUpRight2/></span>realidad virtual</Link>
      </div>
    </>
  );
}

function SearchBar({find}){
  const [input, setInput] = useState('');

  function handleInput(event){
    find(event.target.value);
    setInput(event.target.value);
  }
  return (
    <>
      <input placeholder='buscar...' value={input} onChange={handleInput}/>
    </>
  );
}