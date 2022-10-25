import React, {  } from 'react'
import { logServer } from '../utilities'
import './Button.scss'
interface Props {
  label: string
  href?: string
  download?: string
}

function Button(props: Props) {
  function onClick(event: React.FormEvent) {
    logServer(event.type, props.label)
  }

  return <a className="btn btn-primary"
    href={props.href || '#'}
    download={props.download || null}
    onClick={onClick}
  >{props.label}</a>
}

export default Button