import React, {  } from 'react'
import { logServer } from '../utilities'
import './Button.scss'
interface Props {
  label: string
}

function Button(props: Props) {
  function onClick(event: React.FormEvent) {
    logServer(event.type, props.label)
  }

  return <button className="btn btn-primary" onClick={onClick}>{props.label}</button>
}

export default Button