import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      //window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`Nav ${show && "Nav__black"}`}>
      <img
        className="Netflix__logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
        "
        alt="Netflix Logo"
      />

      <img
        className="Netflix__avatar"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACUCAMAAAAnDwKZAAAAmVBMVEVmjD////////1iijthiDb///tehzS3wZhfiDj8/PdZgytZhS/5+fB9l1H///hbhC7b3sXu8OV/nFiEm1eisn2vu4tjhS5hhy2DnVyLnVXW2LmSolxTgCNqjDvJzqfP066NomjBya69x6Le4tDp7tp3kUZ0lU/29+jP1r/L07Xj589zjzubq2uAmUyVq3WClDvAxZZXfhaxu4PUBOdRAAADhElEQVR4nO3a6XaqMBAAYJNAZAkCAqJIkMviAnax7/9wF5dawG5RqL3nzndO+6cHZjoTgjIMBgAAAAAAAAAAAAAAAAAAAAAAAMA9EKlCfnEERXJcz3OdidJhTs0I/vSmCOHMslUZqyxw9G4ze6XNgiqCrNrWPLyikoRH6GzRR7eJn9QicPEIenA+XMZXneErUrQ/8wm2JqIRtCGqwXhIu86QehjhWoxIEztemTJcOx7LzOj4miEGqyeIEIsloRNIf2pN2KeIEsF/8iv6sFFDJKONWIqDFLXYZrcphlkzRYwyoePJlLVTVPNOLxgyUKvW1KuIR0uRCO+l6HS6GImhys21KKPxrSl2W8VBVcVmilgWS3Fpt1NkwvvW5/xVO8JKqNEDvm4ejpEVdprhQNu0IuA1FzoBdZtdQOix471biZtrEauu4KYzKeobY1VEweO/JgVIfr2mcXV1F2JFrFZjuarvW5nQUv5ehDx9q8IIsVI4Ap1mh/IdEl0Znd+iqwi5fSgg3l/aq/iKCEq5ON5FMYvKXj7UKjxip3W44FfVgGiGt7aszdDQevpuQPSH4WYfwbk6AqETzn3a45cXopucT/qMAAAAAAAAAAAAAAD+Y0T55U+eFM3ZPnQ8wGsgym0loOYsUFX1ufOn6W8RyvgxN69OUpnEi+PD4GFfOVInZaodPV3z5kDVgJ1jMbQfHMiy4Gjo+0GM05zreWyKPhAn5tI9PPPHx1/dTyUO6Hn6zzZTTWBREt2fJRmqTU5YT1XUircgajHn9DtZEoVKS69QmwO2pKe1SJPG5DtLYq59/nSdUI3HnjVqDfAy1+8nw+bMdZ8syzZbP9TfqSYhhNJw9/SyyS5GySwxOn5roEYprcZ0/rD0s4Ubj5ecc983terHpxLn+TJ2n62L7KoWs6DU+7y7EN8tLsIiNLJTa71IkuFeFG0Cq7DbzT3+R6vI8fu+/Uncbc6/5cpxO8bnyh7/0B4hVwl6y35fnDuhu+07HfyaHWx3vba4kSSPk4tXCT43Kryp38OE9mPVXhcHtvrW3ned3nxRbeslN+8w+1PC0k3SlYzQJ0mi0cpK3DL8sQa3EMUcOG5UfNRzlgXe3ODmfT/BEqLo4S7feosgTe2jLE3TIPLmD/4u/NYt8idUeZqmX+a5Mx6P87KcmL5Jld7eeL0BObl3HgAAAAAAAAAAAAAA/Fv+Ana5M1cjmlLSAAAAAElFTkSuQmCC"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
