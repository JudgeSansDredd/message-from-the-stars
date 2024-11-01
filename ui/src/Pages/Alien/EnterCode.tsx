import Card from "../../Components/Card";
import { AlienCodeSchema } from "../../Types/Alien.Validation";

interface PropType {
  alienCode: AlienCodeSchema;
}

export default function EnterCode({ alienCode }: PropType) {
  return (
    <div className="flex flex-col w-full items-center space-y-2">
      <div className="flex">
        <div className="text-3xl content-center p-2">Trust</div>
        <div className="flex justify-center space-x-2 w-full">
          <Card content={alienCode.trust[0]} />
          <Card content={alienCode.trust[1]} />
          <Card content={alienCode.trust[2]} />
        </div>
      </div>
      <div className="flex">
        <div className="text-3xl content-center p-2">Amplify</div>
        <div className="flex justify-center space-x-2 w-full">
          <Card content={alienCode.amplify[0]} />
          <Card content={alienCode.amplify[1]} />
        </div>
      </div>
      <div className="flex">
        <div className="text-3xl content-center p-2">Suspicion</div>
        <div className="flex justify-center space-x-2 w-full">
          <Card content={alienCode.suspicion[0]} />
        </div>
      </div>
    </div>
  );
}
