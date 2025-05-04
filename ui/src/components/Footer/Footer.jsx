import FbIcon from '../Common/FbIcon'
import InstaIcon from '../Common/InstaIcon'

const Footer = ({ content }) => {
  return (
    <div className="bg-black text-white py-8">
      <div className="flex justify-around">
        {content?.items &&
          content?.items?.map((item, index) => {
            return (
              <div className="flex flex-col">
                <p className="text-xl pb-4">{item?.title}</p>
                {item?.list &&
                  item?.list?.map((listItem, index) => {
                    return (
                      <a className="py-1" href={listItem?.path}>
                        {listItem?.label}
                      </a>
                    );
                  })}
                  {item?.description && <p>{item.description}</p>}
              </div>
            );
          })}
      </div>
      <div className='flex gap-3 mt-6 mx-[8%]'>
        <a href="/fb"><FbIcon /></a>
        <a href="/insta"><InstaIcon /></a>
      </div>
      <p className="text-sm text-center">{content?.copyright}</p>
    </div>
  );
};

export default Footer;
