import { NODE_HEIGHT, NODE_WIDTH } from '@/constants';

const nodeGap = 'px-[20px] py-[40px]';

type Props = {
  children: React.ReactNode;
  left: number;
  top: number;
};

function PersonNodeWrapper({ children, left, top }: Props) {
  return (
    <div
      className={`absolute ${nodeGap}`}
      style={{
        width: NODE_WIDTH,
        height: NODE_HEIGHT,
        transform: `translate(${left * (NODE_WIDTH / 2)}px, ${
          top * (NODE_HEIGHT / 2)
        }px)`,
      }}
    >
      {children}
    </div>
  );
}

export default PersonNodeWrapper;
