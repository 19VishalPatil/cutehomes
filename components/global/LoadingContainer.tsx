import { Skeleton } from "../ui/skeleton";
import { Card, CardContent } from "../ui/card";

function LoadingContainer() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
      {Array.from({ length: 10 }, (_, i) => (
        <LoadingProduct key={i} />
      ))}
    </div>
  );
}

function LoadingProduct() {
  return (
    <Card>
      <CardContent className="p-4">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-4 w-3/4 mt-4" />
        <Skeleton className="h-4 w-1/4 mt-4" />
      </CardContent>
    </Card>
  );
}
export default LoadingContainer;
