import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { IArticleReview } from "@/types/article";

export default function ArticleReviewList ({ items } : IArticleReview) {
  const length = items.reduce((acc, review) => {
    return acc + (review.replies ? review.replies.length : 0)
  }, items.length);

  return (
    <div>
      {length > 0 &&
        <div className='py-2 border-b mb-4'>
          <strong>Comments ({length})</strong>
        </div>
      }
      {items.map((review, index) => {
        return (
          <div key={index} className="mt-4">
            <div>
              <div className="bg-gray-100 px-3 py-2 rounded-md inline-block">
                <strong>{review.fullName}</strong> posted at <strong>{review.reviewDate}</strong><br/>
                <span dangerouslySetInnerHTML={{__html: review.message}}></span>
              </div>
            </div>
            {review.replies && review.replies.length > 0 &&
              <div>
                <FontAwesomeIcon icon={faReply} className="rotate-180 mt-2 inline-block align-top" width={20} height={20}/>
                <div className="inline-block">
                  {review.replies?.map((rep, idx) => {
                    return (
                      <div key={index} className='bg-gray-100 p-2 rounded-md mt-2 ml-4'>
                        <strong>{rep.fullName}</strong> posted at <strong>{rep.reviewDate}</strong><br/>
                        <span dangerouslySetInnerHTML={{__html: rep.message}}></span>
                      </div>
                    )
                  })}
                </div>
              </div>
            }
          </div>
        )
      })}
    </div>
  )
}
