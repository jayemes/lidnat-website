import { useAppSelector } from "../redux/hooks";

const GetContent = () => {
  const select = useAppSelector;
  const getContentByLabel = (label: string | undefined): string | undefined => {
    const content = select((state) => state.content.data).find(
      (item) => item.label === label
    )?.content;
    return content;
  };
  return { getContentByLabel };
};

export default GetContent;
