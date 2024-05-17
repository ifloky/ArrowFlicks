import { Flex } from "@mantine/core"
import { Link } from "react-router-dom"
import './NotFoundPage.scss';

export const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <Flex className='colored-block-wrapper'>
        <div className="colored-block"></div>
        <div className="colored-block"></div>
        <div className="colored-block"></div>
        <div className="colored-block"></div>
        <div className="colored-block"></div>
        <div className="colored-block"></div>
        <div className="colored-block"></div>
      </Flex>
      <h1 className="not-found-maintext">PAGE NOT FOUND 404</h1>
      <Flex className='colored-block-wrapper'>
        <div className="colored-block"></div>
        <div className="colored-block"></div>
        <div className="colored-block"></div>
        <div className="colored-block"></div>
        <div className="colored-block"></div>
        <div className="colored-block"></div>
        <div className="colored-block"></div>
      </Flex>
      <p className="not-found-subtext">We can't find the page you are looking for</p>
      <Link to='/' className="purple-btn not-found-btn">Go Home</Link>
    </div>
  )
}
