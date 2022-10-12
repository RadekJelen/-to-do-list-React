import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import { searchQueryParameterName } from "../serchQueryParameterName";
import { StyledDiv } from "./styled";
import { StyledInput } from "../Input/styled";

const Search = () => {
  const query = useQueryParameter(searchQueryParameterName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const OnInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParameterName,
      value: target.value.trim() !== "" ? target.value : undefined,
    })
  };

  return (
    <StyledDiv>
      <StyledInput
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={OnInputChange}
      />
    </StyledDiv>
  )
};

export default Search;