import { ContentWrapper } from "./styles";

type Props = { content: string };

const Content = ({ content }: Props) => {
  return (
    <ContentWrapper>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </ContentWrapper>
  );
};

export default Content;
