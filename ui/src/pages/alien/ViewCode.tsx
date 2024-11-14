import Card from "../../components/Card";
import { AlienCodeSchema } from "../../types/Alien.Validation";

interface PropType {
  alienCode: AlienCodeSchema;
}

export default function EnterCode(props: PropType) {
  const { alienCode } = props;
  return (
    <div className="flex flex-col w-full items-center space-y-2">
      <div className="flex">
        <div className="text-3xl content-center p-2">Trust</div>
        <div className="flex justify-center space-x-2 w-full">
          <Card letter={alienCode.trust[0]} />
          <Card letter={alienCode.trust[1]} />
          <Card letter={alienCode.trust[2]} />
        </div>
      </div>
      <div className="flex">
        <div className="text-3xl content-center p-2">Amplify</div>
        <div className="flex justify-center space-x-2 w-full">
          <Card letter={alienCode.amplify[0]} />
          <Card letter={alienCode.amplify[1]} />
        </div>
      </div>
      <div className="flex">
        <div className="text-3xl content-center p-2">Suspicion</div>
        <div className="flex justify-center space-x-2 w-full">
          <Card letter={alienCode.suspicion[0]} />
        </div>
      </div>
    </div>
  );
}
