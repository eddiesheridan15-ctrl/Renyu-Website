import LegalShell from "../../components/LegalShell";

export const metadata = {
  title: "Support, RENYU",
  description: "Help with the RENYU app and RENYU programmes.",
};

export default function SupportPage() {
  return (
    <LegalShell title="Support" updated="21 August 2026">
      <p>
        RENYU is a four-week team sustainability programme, run through your
        employer and delivered in the RENYU app. If something is not working, we
        would rather hear about it than have you put up with it.
      </p>

      <h2>Contact us</h2>
      <p>
        Email <a href="mailto:support@renyu.co.uk">support@renyu.co.uk</a> and we
        will reply within one working day, Monday to Friday, UK time.
      </p>
      <p>
        It helps if you tell us your company, the name on your account, and what
        you were doing when the problem happened.
      </p>

      <h2>Common questions</h2>

      <h3>I do not have a company code</h3>
      <p>
        Your code comes from whoever is running the programme at your company,
        usually someone in HR, operations or People and Culture. We are not able
        to issue one directly. If you are not sure who that is, email us and we
        will point you to the right person.
      </p>

      <h3>My points look wrong</h3>
      <p>
        Team standings are shown as points per person rather than a team total,
        so a small team competes fairly against a large one. That means a team
        can be ahead on total points and behind on the leaderboard. If a
        specific action has not scored, email us with the date and what you
        logged.
      </p>

      <h3>How is the donation decided?</h3>
      <p>
        Your company commits the donation before the competition starts, so it
        happens either way. The winning team then votes on which of our charity
        partners receives it.
      </p>

      <h3>I want to delete my account</h3>
      <p>
        You can delete your account from inside the app: open Profile, tap the
        settings icon, then Delete my account. This removes your account and the
        content you have posted. If you would rather we did it for you, email{" "}
        <a href="mailto:support@renyu.co.uk">support@renyu.co.uk</a> from the
        address on your account.
      </p>

      <h3>Something in the app is broken</h3>
      <p>
        Email us with your device, whether you are on iOS or Android, and what
        you saw. A screenshot is worth a great deal. We read everything.
      </p>

      <h2>Your data</h2>
      <p>
        Our <a href="/privacy">Privacy Policy</a> explains what we collect and
        how we handle it, including your rights to access, correct or erase your
        data. Privacy questions can go to{" "}
        <a href="mailto:privacy@renyu.co.uk">privacy@renyu.co.uk</a>.
      </p>

      <h2>Running a programme</h2>
      <p>
        If you organise a RENYU programme for your company and need help with
        setup, teams or the donation, email{" "}
        <a href="mailto:support@renyu.co.uk">support@renyu.co.uk</a> or speak to
        your usual RENYU contact.
      </p>
    </LegalShell>
  );
}
