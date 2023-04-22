import React from 'react';
import { Components } from '../../../components/apps';

import cls from "./index.module.scss";

const Products = () => {
  const [tagState, setTagState] = React.useState("");
  const [marksData, setMarksData] = React.useState<any>([]);
  const selectValues = ["Cars", "Technical Machine", "Clothes", "Goods", "Features", "Animals"];
  const tags = ["BMW", "Mercedes", "Audi", "Subaru", "Aston Martin", "Daewoo", "Chevrolet"];
  const marks = [
    {
      id:1,
      type: "BMW",
      data: ["M1", "M2", "M3", "M5", "X3", "X6"]
    },
    {
      id:2,
      type: "Mercedes",
      data: ["222", "S-Class", "E-Class", "C-Class", "Cupe", "Brabus"]
    },
    {
      id:3,
      type: "Subaru",
      data: ["WRX", "STI", "Impreza", "Forester", "Legasy", "Outback"]
    },
  ]

  React.useEffect(() => {
    if(tagState !== "") {
      setMarksData(marks.find(item => 
        item.type.toLowerCase().trim()
          .includes(tagState.toLowerCase().trim())
            ? item
            : null
      ))
    }
  }, [tagState])

  const handleTags = (tag: string) => {
    setTagState(tag)
  }

  return (
    <React.Fragment>
      <Components.Container>
        <section className={cls.products_page}>
          <div className={cls.products_page_filter}>
            <article className={cls.select}>
              <select>
                {
                  selectValues.map(i => 
                    <option key={i} value={i}>{i}</option>  
                  )
                }
              </select>
            </article>
            <article className={cls.tags}>
              {tags.map(item => 
                <button 
                  onClick={() => handleTags(item)} 
                  key={item}
                  className={tagState === item ? cls.activeTag : null}
                >
                  {item}
                </button>
              )}
            </article>
            <article className={cls.hashTags}>
              {marksData?.data?.map((el: any) => 
                <button 
                  onClick={() => handleTags(el.type)} 
                  key={el}
                  className={tagState === el.type ? cls.activeTag : null}
                >
                  {el}
              </button>  
              )}

              {marksData?.type !== tagState && <p>There is no models: <b>{tagState}</b></p>}
            </article>
          </div>
        </section>
      </Components.Container>
    </React.Fragment>
  )
}

export default Products;
