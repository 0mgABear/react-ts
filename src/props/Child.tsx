interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

//method1
export const Child = ({ color, onClick }: ChildProps) => {
  return <div>{color}</div>;
};

//method2
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return <div>{color}</div>;
};
