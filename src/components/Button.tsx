import './Button.scss'
interface Props {
  label: string
}

function Button(props: Props) {
  return <button type="button" className="btn btn-primary">{props.label}</button>
}

export default Button