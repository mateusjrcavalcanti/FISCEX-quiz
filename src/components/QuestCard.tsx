import Button from "./Button";
type Props = {
  title?: string;
  itens?: any;
  subtitle?: string;
  icon?: any;
  position?: string;
};
const QuestCard = ({ title, itens, subtitle, icon, position }: Props) => {
  if (position === undefined) position = "center";
  return (
    <div
      className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ${
        position !== "center" ? "max-h-max max-w-max my-auto" : "bg-gray-500/50"
      } ${position === "right" ? "ml-auto mr-20" : ""} ${
        position === "left" ? "mr-auto ml-20" : ""
      }`}
    >
      <div className="shadow-lg rounded-2xl p-4 m-auto bg-orange-200/50">
        <div className="w-full h-full text-center">
          <div className="flex h-full flex-col justify-between p-2">
            <div className="w-16 mx-auto relative -mt-10 mb-2">
              {position === "center" && <div className="-mt-1">{icon}</div>}
              {position !== "center" && <div className="mt-5">{icon}</div>}
            </div>

            <p className="text-gray-800 dark:text-gray-200 text-xl font-bold mt-1">
              {title || "title Tal"}
            </p>
            {subtitle && (
              <p className="text-gray-600 dark:text-gray-400 text-xs py-2 px-6">
                {subtitle}
              </p>
            )}
            <div className="grid justify-items-start mt-4">
              {itens?.map((item: any) => {
                return (
                  <div className="mb-2 w-full h-full" key={item.label}>
                    <Button
                      color={item.color}
                      label={item.label}
                      onClick={() => item.onClick()}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuestCard;
