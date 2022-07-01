import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Shadow Bachs</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Charmonman:wght@700&family=Sonsie+One&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles.bgpic}>
        <div className={styles.weejo}>
          <video autoPlay muted className={styles.full} loop>
            <source src="/BackgroundVid.mp4"></source>
          </video>
        </div>
      <div className={styles.title}>
          Shadow Bachs
      </div>
      </div>
      
      <div className={styles.flexy}>
        <div className="col-2_3">
        <p className={styles.reg}>Shadow Bachs is a New York City-based band that knows how to ride a deep groove. 
        Born from the primordial ooze of the downtown New York warehouse scene and the glitz of CBGB&apos;s, Shadow Bachs has 
        graced such stages as the Bitter End, Arlene&apos;s Grocery, and the Shrine. The band draws inspriation from
        such disparate voices as Lou Reed, Talk Talk, Weezer, Alborosie, and the Tom Tom Club. Dave and Sam on bass and drums 
        anchor the outfit from the bottom up, with solid, danceable, pinpoint precision. Harry Chronic, a 
        singer/songwriter/guitarist of uncommon subtlety, fronts the band. Dan Schwartzman provides a melodic 
        punch on keys. Rich vocal harmonies round out the sound that begs you to move.</p>
        </div>
        <div className="col-1_3" style={{paddingTop: '25px', paddingBottom: '25px'}}>
        <iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/album/6nt4zUiasBqR5A3Pk2uxGH?utm_source=generator" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <p><a href="https://music.apple.com/us/album/shadow-bachs/1632324591"><Image src="/ListenOnApple.svg"></Image></a></p>
        </div>
      </div>
      <div className={styles.player}>
      </div>
      <div className={styles.flexy + ' ' + styles.contact}>
        <div className="col-1_3">
          <div className={styles.fb_wrap}>
          <div className="fb-page" data-href="https://www.facebook.com/shadowbachsnyc" data-tabs="timeline,events" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/shadowbachsnyc" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/shadowbachsnyc">Shadow Bachs</a></blockquote></div>

          </div>
        </div>
        <div className="col-2_3">
          <div className={styles.fb_wrap}>
          <p>Give us a like on Facebook to keep up with the latest and greatest!</p>
          <p>Email us at <a href="mailto:shadowbachsnyc@gmail.com">shadowbachsnyc@gmail.com</a></p>
          </div>
        </div>
      </div>
      
    </div>
  )
}
