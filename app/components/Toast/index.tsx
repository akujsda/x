interface Props {  
    className?: string;
    children: React.ReactNode;
}

export const Toast = ({ children, className }: Props) => {
  return (
    <div className={className} >
      {children}
    </div>
  );
};