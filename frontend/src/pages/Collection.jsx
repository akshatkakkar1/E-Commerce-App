import React, { use, useContext, useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products,search,showSearch} = useContext(ShopContext);
  const [showFilters,setShowFilters]=useState(false);
  const [filterProducts,setFilterProducts]=useState([]);

  // these states will hold selected filter values
  const [category,setCategory]=useState([]);
  const[subCategory,setSubCategory]=useState([]);
  const [sortType,setSortType]=useState('relavent');

  const toggleCategory = (e)=>{
    
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value));
    }
    else{
      setCategory(prev => [...prev,e.target.value]);

    }
  }
  

  const toggleSubCategory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value));
    }
    else{
      setSubCategory(prev => [...prev,e.target.value]);

    }
  }
  

const applyFilter = () =>{
  let productsCopy = products.slice();

  if(showSearch && search){
    productsCopy = productsCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()));
  }

  if(category.length > 0){
    productsCopy = productsCopy.filter(item=>category.includes(item.category));

}

if(subCategory.length > 0){
  productsCopy = productsCopy.filter(item=>subCategory.includes(item.subCategory));

}
setFilterProducts(productsCopy);
}
 

const sortProduct = () =>{
  let fpCopy = filterProducts.slice();

  switch(sortType){
    case 'low-high':
      setFilterProducts(fpCopy.sort((a,b)=> a.price - b.price));
      break;
    case 'high-low':
      setFilterProducts(fpCopy.sort((a,b)=> b.price - a.price));
      break;
    default:
      setFilterProducts(products);
      break;


  }
}

  useEffect(()=>{ 
    applyFilter();
  }, [category,subCategory,search,showSearch]);
 
  useEffect(()=>{
    sortProduct();
  },[sortType])

  return ( 
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p onClick={()=> setShowFilters(!showFilters)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilters ? 'rotate-90' : ''}`} alt=""/>
        </p>
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-gray-600 font-light text-sm'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Men'} onChange={toggleCategory}/> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Women'} onChange={toggleCategory}/> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Kids'} onChange={toggleCategory}/> Kids
            </p>
          </div>
        </div>

        {/* Sub category filter */}
         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-gray-600 font-light text-sm'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Topwear'} onChange={toggleSubCategory} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
            </p>
            <p className='flex gap-2'> 
              <input className='w-3' type='checkbox' value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
            </p>
          </div>
        </div>

      </div>
      {/* Right Side */}
      <div className='flex-1'>
      <div className='flex justify-between text-base sm:text-2xl mb-4'>
        <Title text1={'All'} text2={'Collections'}/>
        {/* porduct sort */}

        <select onChange = {(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 px-2 text-sm ' >
          <option value="relavent">Sort by: Relavent</option>
          <option value="low-high">Sort by: Low to High</option>
          <option value="high-low">Sort by: High to Low</option>
        </select>
      </div>

      {/* map products */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filterProducts.map((item,index)=>(
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))
        }
       
      </div>
      </div>
    </div>
  )
}

export default Collection