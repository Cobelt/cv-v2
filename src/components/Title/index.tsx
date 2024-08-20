import T, { Tags, type ITitle } from "./Title"

type ITitleWithoutTag = Omit<ITitle, "tag">
const h1 = (props: ITitleWithoutTag) => <T tag={Tags.h1} {...props} />
const h2 = (props: ITitleWithoutTag) => <T tag={Tags.h2} {...props} />
const h3 = (props: ITitleWithoutTag) => <T tag={Tags.h3} {...props} />
const h4 = (props: ITitleWithoutTag) => <T tag={Tags.h4} {...props} />
const h5 = (props: ITitleWithoutTag) => <T tag={Tags.h5} {...props} />
const h6 = (props: ITitleWithoutTag) => <T tag={Tags.h6} {...props} />

const Title = { h1, h2, h3, h4, h5, h6 }
export default Title
