const Tag: React.FC<TagProps> = ({ text }) => {
  return <span className='bg-gray-200 text-gray-600 p-1 text-base uppercase inline-block'>{text}</span>;
};

interface TagProps {
  text: string;
}

export default Tag;
