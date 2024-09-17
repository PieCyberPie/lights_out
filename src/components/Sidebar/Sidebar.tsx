const Sidebar = () => {
  return (
    <>
      <div
        className="sidebar_toggle"
        onClick={() => {
          changeButton();
        }}
      ></div>
      <div className="sidebar"></div>
    </>
  );
};

export default Sidebar;

const changeButton = () => {
  const button = document.querySelector(".sidebar_toggle");
  const sidebar = document.querySelector(".sidebar");
  if (button) {
    button.classList.toggle("toggled");
  }
  if (sidebar) {
    sidebar.classList.toggle("toggled_sidebar");
  }
};
