import { Heading, StyledImage } from "./EmptyData.styles";

/**
 * EmptyData Component
 *
 * Displays a message and an image when there are no expenses found.
 */
const EmptyData: React.FC = () => {
  return (
    <>
      <Heading>No expenses found</Heading>
      <StyledImage src="empty-data.png" alt="no-data" />
    </>
  );
};

export default EmptyData;
