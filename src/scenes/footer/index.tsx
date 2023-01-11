import logo from "@/assets/Logo.png";

type Props = {}

const Footer = (props: Props) => {
  return <footer className="bg-primary-100 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0"> 
        <img src={logo} alt="logo" />
        <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, voluptate architecto non ipsam reiciendis iusto ut facere laborum expedita quos libero ad sit voluptatem consequatur, debitis, provident voluptas eius tenetur.
            Qui, omnis! Adipisci dignissimos non harum numquam. Iure reiciendis sit tempora, ullam accusamus iusto doloribus quis, molestias incidunt adipisci possimus autem provident, deserunt obcaecati ex. Repellendus perferendis deserunt asperiores ea.
            Nisi dolore repellendus laboriosam earum quo. Sint dolores neque at voluptates officiis, quo dignissimos qui animi tempora quidem dolorum. Fugiat laborum quas delectus consequuntur officia quaerat est nostrum praesentium ullam.
        </p>
        <p> &copy; Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Massa orci senectus</p>
            <p className="my-5">Et gravida id et etiam</p>
            <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
            <p className="my-5">Et gravida id et etiam.</p>
            <p>{333}425-6825</p>
            <p>Ullamcorper vivamus</p>
        </div>
    </div>
  </footer>
}

export default Footer;