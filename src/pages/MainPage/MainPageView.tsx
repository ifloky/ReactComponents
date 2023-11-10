import { Outlet } from 'react-router-dom';

export default function MainPageView() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>Header</div>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
