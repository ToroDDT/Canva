import "/src/CSS/sideBar.css";

function SideBar() {
  return (
    <div className="sideBar">
      <aside>
        <section className="widget">Templates</section>
        <section className="widget">Elements</section>
        <section className="widget">Uploads</section>
        <section className="widget">Projects</section>
      </aside>
      <div id="sideBar-Expanded"></div>
    </div>
  );
}

export default SideBar;
