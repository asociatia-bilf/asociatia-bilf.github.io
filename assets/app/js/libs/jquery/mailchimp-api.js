function MailChimpSubscribe ()
{

    $.ajax
    (
        {
            url: "https://us12.api.mailchimp.com/3.0/lists/53241437/members"
        }
    );

}