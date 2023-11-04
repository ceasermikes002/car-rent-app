import CarCard from '@/components/CarCard'
import CustomFilter from '@/components/CustomFilter'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import { fuels, yearsOfProduction } from '@/constants'
import { fetchCars } from '@/utils'

export default async function Home(searchParams: { manufacturer: any; year: any; fuel: any; limit: any; model: any }) {
  const allCars = await fetchCars({
    manufacturer:searchParams.manufacturer|| '',
    year:searchParams.year|| 2022,
    fuel:searchParams.fuel|| '',
    limit:searchParams.limit|| 10,
    model:searchParams.model|| ''
  })
  const isDataEmpty=!Array.isArray(allCars)||allCars.length <1 || !allCars
  console.log(allCars);
  

  return (
    <main 
    className='overflow-hidden'>
      <Hero/>
      <div className='mt-12sm:px-16 px-6x max-w-[1440px] mx-auto'
      id='discover'>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          <h1 className='text-4xl font-extrabold mt-24'>
            Car Catalogue
          </h1>
          <p>Explore the cars you may like</p>
        </div>
        <div className='mt-12 w-full flex-between items-center flex-wrap gap-5'>
          <SearchBar/>
          <div className='flex justify-start flex-wrap items-center gap-2'>
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="fuel" options={yearsOfProduction}/> 
          </div>
        </div>


        {!isDataEmpty?(
          <section>
           <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
            {allCars?.map((car)=>
            // eslint-disable-next-line react/jsx-key
            <CarCard
            car={car}
            /> )}
           </div>
          </section>
        ):(
          <div className='mt-16 flex justify-center items-center flex-col gap-2'>
            <h2 className='txt-black text-xl font-bold'>Oops no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div> 
    </main>
  )
}
