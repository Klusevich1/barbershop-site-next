import AboutFirstBlock from '@/components/AboutFirstBlock'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactsBlock from '@/components/ContactsBlock';
import ModalAppointment from '@/components/ModalAppointment';
import NewsBlock from '@/components/NewsBlock';
import OurPartnersSlider from '@/components/OurPartnersSlider';
import ServicesList from '@/components/ServicesList';
import YourReviewsBlock from '@/components/YourReviewsBlock';
import BasicLayout from '@/layouts/BasicLayout'
import React from 'react'

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: 'О нас', link: `/about` },
];

const about = () => {
  return (
    <>
        <BasicLayout>
            <>
              <Breadcrumbs breadcrumbs={breadcrumbs}/>
              <ServicesList />
            </>
        </BasicLayout>
    </>
  )
}

export default about