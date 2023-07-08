interface FooterProps {
  link: string;
  text: string;
}

export default function Footer({link, text}: FooterProps) {

  return (
    <div className="footer">
      <div className="footer-links">
        <a href={link}>{text}</a>
      </div>
    </div>
  )

}
