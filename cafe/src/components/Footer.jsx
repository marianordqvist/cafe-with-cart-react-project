export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h4>Get in contact with us</h4>
        <form>
          <input name="name" type="text" class="feedback-input" placeholder="Name" />
          <input
            name="email"
            type="text"
            class="feedback-input"
            placeholder="Email"
          />
          <textarea
            name="text"
            class="feedback-input"
            placeholder="Comment"
          ></textarea>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    </footer>
  );
}
