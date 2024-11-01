import styles from "./ProfileLayout.module.css";

const ProfileLayout = ({
  children,
  calendar,
  journal,
  navigation,
  modal,
}: {
  children: React.ReactNode;
  calendar: React.ReactNode;
  journal: React.ReactNode;
  navigation: React.ReactNode;
  modal: React.ReactNode;
}) => {
  console.log("calendar :>> ", calendar);
  console.log("journal :>> ", journal);
  console.log("navigation :>> ", navigation);
  console.log("modal :>> ", modal);

  return (
    <div>
      <h1>Profile Layout</h1>
      <div className={styles.container}>
        <div className="col-start-1">{navigation}</div>
        <div className="col-start-2">{calendar}</div>
        <div className="col-start-3">{journal}</div>
      </div>
      {children}
      {modal}
    </div>
  );
};

export default ProfileLayout;
