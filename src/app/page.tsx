"use client"
import CompanyDetails from '@/components/CompanyDetails'
import Deals from '@/components/Deals'
import Services from '@/components/Services'
import TyresSold from '@/components/TyresSold'
import PaymentModes from '@/components/PaymentModes'
import QuestionForm from '@/components/QuestionForm'

export default function Home() {
  return (
    <div className="space-y-12">
      <CompanyDetails />
      <Deals />
      <Services />
      <TyresSold />
      <PaymentModes />
      <QuestionForm />
    </div>
  )
}