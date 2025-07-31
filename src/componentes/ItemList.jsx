import Item from './Item'

const ItemList = ({data}) => {
  return (
    <div className='m-3 flex flex-wrap justify-center gap-6'>
        {data.map((event)=> <Item key={event.id} event={event}/>)}
    </div>
  )
}

export default ItemList;