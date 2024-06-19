/* eslint-disable react/jsx-key */
import Image from "next/image";
import UserInfo from "./_components/UserInfo";

import { data } from "@/data";

export default function Home() {
  const datas = data
  return (
    <>
      <div className='my-6 flex flex-col gap-4'>
        {datas.map((data, index) => (
          <UserInfo key={index}
            Iden={data.Iden}
            code_hn={data.code_hn}
            hight={data.hight}
            name={data.name}
            sex={data.sex}
            type={data.type}
            weight={data.weight} />
        ))}
      </div>
    </>
  );
}
