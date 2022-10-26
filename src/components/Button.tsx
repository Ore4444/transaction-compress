import React, {  } from 'react'
import { logServer } from '../utilities'
import './Button.scss'
interface Props {
  label: string
  type?: string
  disabled?: boolean
  href?: string
  download?: string
  onClick?: (event: React.FormEvent) => void
  openModal?: string
}

function Button(props: Props) {
  function onClick(event: React.FormEvent) {
    logServer(event.type, props.label)
  }

  return <a className={`btn btn-${props.type || 'primary'} ${props.disabled ? 'disabled' : ''}`}
    href={props.href || '#'}
    download={props.download || null}
    onClick={props.onClick || onClick}
    data-bs-toggle={props.openModal ? 'modal' : null}
    data-bs-target={props.openModal || null}
  >{props.label}</a>
}

export default Button