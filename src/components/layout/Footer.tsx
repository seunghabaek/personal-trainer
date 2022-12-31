import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} personal-trainer
    </footer>
  );
};
