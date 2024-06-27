import React from 'react'

type LayoutProps = {
    children:React.ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <>
    <div>{props.children}</div>
    <div>Hello</div>
    </>
  )
}

export default Layout