import Image from 'next/image'
import styles from './page.module.css'
import Banner from '../components/banner/banner'
import Card from '@/components/cards/card'
import Lastcard from '@/components/applycard/lastcard'
import Events from '@/components/events/Events'

export default function Home() {
  return (
    <div>
      <Banner/>
      <Card/>
      <Events/>
      <Lastcard/>
      
    </div>
  )
}
