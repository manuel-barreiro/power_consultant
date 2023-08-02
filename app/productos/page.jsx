'use client';

import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'
import ProductSwiper from "@components/productos/ProductSwiper/ProductSwiper";

const Productos = () => {
  return (
    <section>
        <ProductSwiper />
    </section>
  )
}

export default Productos