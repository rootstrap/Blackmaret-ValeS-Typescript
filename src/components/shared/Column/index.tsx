interface ColumnProps {
  title: string;
  items: { name: string; url?: string }[];
}

const Column = ({ title, items }: ColumnProps) => {
  const renderList = () => {
    if (items.length > 0) {
      return (
        <ul>
          {items.map((item, index) => (
            <li key={index} className='mb-3'>
              {item.url ? <a href={item.url}>{item.name}</a> : item.name}
            </li>
          ))}
        </ul>
      );
    } else {
      return null;
    }
  };

  return (
    <div className='mb-6 w-1/2 md:mb-0 md:w-1/4'>
      <h2 className='mb-4 font-bold'>{title}</h2>
      {renderList()}
    </div>
  );
};

export default Column;
