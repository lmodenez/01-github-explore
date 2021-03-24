export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>{props.repository?.item}</p>

      <a href={props.repository?.link}>
        Acessar repositorio
      </a>
    </li>
  )
}