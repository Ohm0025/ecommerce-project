type Props = {
  catName: string;
  cb: (e: string) => void;
};

const CheckBox = (props: Props) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          value={props.catName}
          onChange={(e) => props.cb(e.target.value)}
        />
        {props.catName}
      </label>
    </div>
  );
};

export default CheckBox;
