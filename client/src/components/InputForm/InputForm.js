import React, {useState} from 'react'
import {Input} from 'antd'

const InputForm = ({props}) => {
    const [valueInput,setValueInput] = useState('')
    // const {placeholder = "Nhập tên đăng nhập"} = props
  return (
    <Input style={{backgroundColor:'transparent',color:'#fff'}} placeholder={'nhập tên tài khoản'} valueInput={valueInput} />
  )
}

export default InputForm