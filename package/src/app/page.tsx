'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { supabase } from '@/lib/supabaseClient'

export default function Home() {
  const [imgUrl, setImgUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchImage = async () => {
      const { data, error } = await supabase
        .from('venue-photos')
        .select('photoURL')
        .eq('venue_id', 1)
        .single()
      if (error) {
        setError(error.message)
      } else if (data && data.photoURL) {
        setImgUrl(data.photoURL)
      } else {
        setError('No image found')
      }
      setLoading(false)
    }
    fetchImage()
  }, [])

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Supabase Image Test</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {imgUrl && (
        <Image
          src={imgUrl}
          alt="Venue Hero"
          width={600}
          height={400}
          style={{ borderRadius: 16, boxShadow: '0 2px 16px #0002' }}
          unoptimized={true}
        />
      )}
    </main>
  )
}
