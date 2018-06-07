import Link from 'next/link'
import styled from 'styled-components';

const Div = styled.div`
  background-color: pink;
  color: purple;
`;

export default () => (
  <Div>Hello World. <Link href='/apple/pie'><a>Apple Pie</a></Link></Div>
);
