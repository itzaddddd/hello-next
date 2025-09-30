import React from 'react';
import { ImageSlider } from "@/components/imageSlider"
import { serverSideFunction } from '@/utils/server-utils';
import { clientSideFunction } from '@/utils/client-utils';

export default function ServerRoute() {
  const result = serverSideFunction()
  return (
    <>
      <h1> Server Route {result} </h1>
      <ImageSlider />
    </>
  )
}
