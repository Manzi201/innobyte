import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About INNOBYTE — IT Services Company',
  description: 'Learn about INNOBYTE — who we are, our mission, and why we are the right digital partner for your business.',
}

export default function AboutPage() {
  return <AboutContent />
}
