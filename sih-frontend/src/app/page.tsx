"use client"

import Api from "../../components/Api"
import GridBox from "../../components/GridBox"
import Main from "../../components/Main"
import Navbar from "../../components/Navbar"
import Payment from "../../components/Payment"
import Slide from "../../components/Slide"
import Welcome from "../../components/Welcome"

export default function Home() {
  return <>
    <Navbar />
    <Slide />
    <Welcome />
    <Main />
    <GridBox />
    <Api />
    <Payment />
  </>
}
